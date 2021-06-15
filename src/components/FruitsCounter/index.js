import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMangoes = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="page-container">
        <div className="item-container">
          <h1>
            Bob ate <span className="count">{mangoes}</span> mangoes{' '}
            <span className="count">{bananas}</span> bananas
          </h1>
          <div className="all-items-container">
            <div className="items-container">
              <img
                alt="mango"
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div>
                <button className="btn" type="button" onClick={this.eatMangoes}>
                  Eat Mangoes
                </button>
              </div>
            </div>
            <div className="items-container">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div>
                <button className="btn" type="button" onClick={this.eatBananas}>
                  Eat Bananas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
