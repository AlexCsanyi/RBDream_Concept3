import React from "react"
import cardFullWidthStyles from "./cardFullWidth.module.scss"
import { FaHeart, FaShareAlt } from "react-icons/fa"

class cardFullWidth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false,
      likes: 0,
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick = event => {
    this.setState({ liked: !this.state.liked })
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
            <FaShareAlt></FaShareAlt>
            <FaHeart
              className={
                this.state.liked
                  ? cardFullWidthStyles.redHeart
                  : cardFullWidthStyles.standardHeart
              }
              onClick={this.onClick}
            ></FaHeart>
          </div>
        </div>
      </div>
    )
  }
}

export default cardFullWidth
