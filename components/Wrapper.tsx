// This helps us to make Next.js's `getInitialProps` a consistent behavior for the native app.
import React from "react";

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface WrapperProps {
  class: any;
  getInitialProps?: any;
  props?: any;
}

// Describes requirement of various properties of specific types
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface WrapperState {
  initProp: any;
}

// Used in ArticleList pages and in compisition of HomepageWrapper
export default class Wrapper extends React.Component<
  WrapperProps,
  WrapperState
> {
  constructor(props) {
    super(props);
    this.state = { initProp: {} };
  }

  async componentDidMount(): Promise<void> {
    await this._setInitialProps();
  }

  async _setInitialProps(): Promise<void> {
    const { class: WrappedClass, getInitialProps: param } = this.props;
    if (typeof WrappedClass.getInitialProps === "function") {
      this.setState({
        initProp: await WrappedClass.getInitialProps(param),
      });
    }
  }

  render(): React.ReactNode {
    const { class: WrappedClass, props: parentProps } = this.props;
    const { initProp } = this.state;
    return <WrappedClass {...parentProps} {...initProp} />;
  }
}
