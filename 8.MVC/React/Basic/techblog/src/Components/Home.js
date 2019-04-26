import React from 'react';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: [
          {
            'title': 'The Impact the Software Industury has on Trees',
            'author': 'efjeiruoewiur',
            'commentcount': 2,
            'datecreated': new Date().getDate,
            'img': 'https://placeimg.com/640/480/any',
            'shorttext': `Nam tempor turpis et urna sagittis pharetra. Nullam molestie lorem non arcu venenatis,
                          non imperdiet neque venenatis.Praesent sed dignissim velit.Nam vel lorem velit.Aliquam eget neque pretium,
                          placerat magna at,
                          consectetur arcu.In ac feugiat quam.Fusce consequat pellentesque lacinia.Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                          per inceptos himenaeos.Nullam fermentum,
                          lacus sed aliquam auctor,
                          dui diam porta ipsum,
                          eget luctus elit est sit amet magna`
          }, {
            'title': 'The Impact the Software Industury has on Trees',
            'author': 'efjeiruoewiur',
            'commentcount': 2,
            'datecreated': new Date().getDate,
            'img': 'https://placeimg.com/640/480/any',
            'shorttext': `Nam tempor turpis et urna sagittis pharetra. Nullam molestie lorem non arcu venenatis,
                          non imperdiet neque venenatis.Praesent sed dignissim velit.Nam vel lorem velit.Aliquam eget neque pretium,
                          placerat magna at,
                          consectetur arcu.In ac feugiat quam.Fusce consequat pellentesque lacinia.Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                          per inceptos himenaeos.Nullam fermentum,
                          lacus sed aliquam auctor,
                          dui diam porta ipsum,
                          eget luctus elit est sit amet magna`
          }
        ]
      };
    }
    render() {
  
      let articles;
      articles = this
        .state
        .articles
        .map((item, index) => {
          console.log(item.title);
  
          return (
            <article key={index}>
              <header>
                <h2>{item.title}</h2>
                <div class="meta">
                  Posted By
                  <strong>{item.author}1 Day Ago</strong>
                  <span>({item.commentcount}
                    Comments)</span>
                </div>
              </header>
              <img src={item.img} alt="Post 1"/>
              <p>{item.shorttext}</p>
              <div class="ad">
                <img src="img/ad.jpg" alt="Advertisement"/>
              </div>
              <footer>
                <a href="#single-post.html" class="black-button">
                  <i class="fa fa-paper-plane w3-margin-right"></i>Read More</a>
              </footer>
            </article>
          );
        })
  
      return (
        <section className="content">
          {articles}
          <div class="clearfix"></div>
        </section>
  
      );
  
    }
  
  }export default Home;
  