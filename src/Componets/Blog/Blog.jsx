import React from 'react';
import Article from '../Article/Article';
import GraphicDesign from '../../assets/Development/42950.jpg';
import DigitalMarket from '../../assets/Development/5243776_2729534.jpg'
import WebDev from '../../assets/Development/2150201871.jpg'
import AppDev from '../../assets/Development/representation-user-experience-interface-design.jpg'


import './Blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
                <Article imgUrl={AppDev} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={WebDev} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={DigitalMarket} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={GraphicDesign} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                {/* <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
            </div>
        </div>
    </div>
);

export default Blog;
