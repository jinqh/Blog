import React from 'react'
import styles from './index.less'
import axios from 'axios'

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    axios.get('/api/getArticles?name=nihao&age=18')
      .then(res => {
        console.log('res', res)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {
    return (
      <nav>
        <ul className={styles.navWrapper}>
          <li onClick={this.handleClick.bind(this)}>首页</li>
          <li>关于我</li>
        </ul>
      </nav>
    )
  }
}

export default Nav
