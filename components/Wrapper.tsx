// This is a bit anti-pattern and hacky, considering that we should not change `props`.
// However, this helps us to make Next.js's `getInitialProps` a consistent behavior for the native app.
import React from "react";
import { Dimensions } from "react-native";

interface WrapperProps {
  class: any;
  getInitialProps?: any;
  props?: any;
}

interface WrapperState {
  initProp: any;
}

export default class Wrapper extends React.Component<
  WrapperProps,
  WrapperState
> {
  constructor(props) {
    super(props);
    this.state = { initProp: {} };
  }

  async componentDidMount(): Promise<void> {
    const { class: WrappedClass, getInitialProps: param } = this.props;
    if (typeof WrappedClass.getInitialProps === "function") {
      this.setState({
        initProp: await WrappedClass.getInitialProps(param),
      });
    }

    // We do `forceUpdate` so that responsive property can be properly updated in
    // the native app.
    // We add it here (in the wrapper that is only used by the native app) because
    // web version uses normal media query.
    Dimensions.addEventListener("change", this.forceUpdateComponents);
  }

  componentWillUnmount(): void {
    Dimensions.removeEventListener("change", this.forceUpdateComponents);
  }

  forceUpdateComponents = () => this.forceUpdate();

  render(): React.ReactNode {
    const { class: WrappedClass, props: parentProps } = this.props;
    const { initProp } = this.state;
    return <WrappedClass {...parentProps} {...initProp} />;
  }
}
