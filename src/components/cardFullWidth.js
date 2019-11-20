import React from "react"
import cardFullWidthStyles from "./cardFullWidth.module.scss"
import { FaHeart, FaShareAlt, FaFacebook, FaInstagram } from "react-icons/fa"

class cardFullWidth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false,
      clicked: false,
    }

    this.showRedHeart = this.showRedHeart.bind(this)
    this.shareClicked = this.shareClicked.bind(this)
  }

  showRedHeart = event => {
    this.setState({ liked: !this.state.liked })
  }

  shareClicked = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div
        className={
          this.props.className
            ? cardFullWidthStyles.right
            : cardFullWidthStyles.left
        }
      >
        <div className={cardFullWidthStyles.imageHolder}>
          <img
            className={cardFullWidthStyles.productImages}
            alt={this.props.alt}
            src={this.props.image}
          ></img>
        </div>
        <div className={cardFullWidthStyles.textGroup}>
          <p className={cardFullWidthStyles.productName}>{this.props.name}</p>
          <h4 className={cardFullWidthStyles.productTitles}>
            {this.props.title}
          </h4>
          <p className={cardFullWidthStyles.productDescriptions}>
            {this.props.text}
          </p>
          <hr></hr>
          <div className={cardFullWidthStyles.iconGroup}>
            <div
              className={
                this.state.clicked
                  ? cardFullWidthStyles.shareActive
                  : cardFullWidthStyles.shareStandard
              }
              onClick={this.shareClicked}
            >
              <FaShareAlt></FaShareAlt>
              <a
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram></FaInstagram>
              </a>
              <a
                href="https://en-gb.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebook></FaFacebook>
              </a>
            </div>
            <FaHeart
              className={
                this.state.liked
                  ? cardFullWidthStyles.redHeart
                  : cardFullWidthStyles.standardHeart
              }
              onClick={this.showRedHeart}
            ></FaHeart>
          </div>
        </div>
      </div>
    )
  }
}

export default cardFullWidth
