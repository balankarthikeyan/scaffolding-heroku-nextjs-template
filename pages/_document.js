import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Header } from '../components/Header'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const NewServerStyleSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            NewServerStyleSheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            <Header />
            {initialProps.styles}
            {NewServerStyleSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      NewServerStyleSheet.seal()
    }
  }
}
