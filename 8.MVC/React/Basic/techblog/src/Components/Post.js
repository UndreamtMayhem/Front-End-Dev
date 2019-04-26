import React from 'react';

class Post extends React.Component {

    render() {

        return ( 
            <section class="content">
                <article>
                    <header>
                        <h2>Facebook launches friend-tracking feature</h2>
                        <div class="meta">
                            Posted By <strong>Brad Traversy 1 Day Ago</strong> <span>(2 Comments)</span>
                        </div>
                    </header>
                    <img src="https://placeimg.com/640/480/any" alt="Post 1"/>
                    <p>Nam tempor turpis et urna sagittis pharetra. Nullam molestie lorem non arcu venenatis, non imperdiet neque venenatis.
                        Praesent sed dignissim velit. Nam vel lorem velit. Aliquam eget neque pretium, placerat magna at, consectetur arcu.
                        In ac feugiat quam. Fusce consequat pellentesque lacinia. Class aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos. Nullam fermentum, lacus sed aliquam auctor, dui diam porta ipsum, eget luctus elit est
                        sit amet magna</p>
                    <div class="ad">
                        <img src="img/ad.jpg" alt="Advertisement"/>
                    </div>
                    <footer id="comments" class="footer-comments">
                        <h3>Recent Comments</h3>
                        <div class="comment-left">
                            <img src="https://placeimg.com/50/50/people" class="profile-img"/>
                        </div>
                        <div class="comment-right">
                            <strong>John Doe</strong> Wrote:
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin risus sed facilisis viverra.</p>
                        </div>
                        <div class="clearfix"></div>
                        <hr/>
                        <div class="comment-left">
                            <img src="https://placeimg.com/50/50/people" class="profile-img"/>
                        </div>
                        <div class="comment-right">
                            <strong>John Doe</strong> Wrote:
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin risus sed facilisis viverra.</p>
                        </div>
                        <div class="clearfix"></div>
                        <div class="comment-form">
                            <h3>Leave Comment</h3>
                            <form>
                                <p><label>Name: </label><input type="text"/></p>
                                <p><label>Email: </label><input type="email"/></p>
                                <p><label>Comment: </label><textarea></textarea></p>
                                <p><button class="black-button">Add Comment</button></p>
                            </form>
                        </div>
                    </footer>
                </article>
		</section>


            

        )
    }

}

export default Post;