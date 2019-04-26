import React from 'react';

class AddPost extends React.Component {

    render() {

        return (
            <section class="content">
                <div class="add-form">
                    <h2>Add Post</h2>
                    <form>
                        <p>
                            <label>Post Title:
                            </label>
                            <input type="text"/>

                        </p>
                        <p>
                            <label>Category:
                            </label>
                            <div class="styled-select slate">
                                <select>
                                    <option value="">Web Development</option>
                                    <option value="">Design</option>
                                    <option value="">Cloud & Hosting</option>
                                    <option value="">Gadgets</option>
                                    <option value="">Software</option>
                                    <option value="">SEO & Marketing</option>
                                    <option value="">SEO & Marketing</option>
                                </select>
                            </div>
                        </p>
                        <p>
                            <label>Body:
                            </label>
                            <textarea></textarea>
                        </p>
                        <p>
                            <label>Select Image:
                            </label>
                            <input type="file"/></p>
                        <p>
                            <button>Add Post</button>
                        </p>
                    </form>
                </div>

            </section>

        )

    }

}
export default AddPost;