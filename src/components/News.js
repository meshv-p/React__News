import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        pagesize: 8,
        category: 'general'
    }

    static propTypes = {
        pagesize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        console.log("hey i am constructor in news com");

        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async Updatenews() {
        this.props.setProgress(10);
        let link = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(link);
        // this.props.setProgress(30);
        let json = await data.json();
        // this.props.setProgress(70);
        console.log(json);
        this.setState({ articles: json.articles, totalResults: json.totalResults, loading: false })
        this.props.setProgress(100);

    }

    componentDidMount() {
        // let link = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=1&pagesize=${this.props.pagesize}`;
        // this.setState({loading:true})
        // let data = await fetch(link);
        // let json = await data.json();
        // console.log(json);
        // this.setState({ articles: json.articles,totalResults:json.totalResults ,loading:false })
        // console.log('i am calling next btn');
        this.Updatenews();
    }

    next = () => {
        // console.log('next');
        // let link = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        // this.setState({loading :true})
        // let data = await fetch(link);
        // let json = await data.json();
        // // console.log(json);
        // this.setState({ articles: json.articles ,
        //                 page:this.state.page +1,
        //             loading:false})
        console.log("befor 1");
        this.setState({ page: this.state.page + 1 });
        console.log("after 1");
        this.Updatenews();
    }
    previous = async () => {
        // let link = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        // this.setState({loading :true})
        // let data = await fetch(link);
        // let json = await data.json();
        // console.log(json);
        // this.setState({ articles: json.articles ,
        //                 page:this.state.page +-1,loading:false})
        this.setState({ page: this.state.page - 1 });
        this.Updatenews();
    }

    async loadmore() {
        let link = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(link);
        let json = await data.json();
        console.log(json);
        this.setState({
            articles: this.state.articles.concat(json.articles),
            totalResults: json.totalResults, loading: false
        })
    }

    fetchMoreData = async () => {
        // a fake async api call like which sends
        this.setState({ page: this.state.page + 1 });
        this.loadmore();
    };

    render() {
        return (
            <>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container my-3">
                    <h1 className="text-center">{this.props.heading}</h1>
                    <hr />
                        <div className="row">
                            {this.state.articles.map((e) => {
                                return <div className="col-auto mx-auto my-2" key={e.url}>
                                    <NewsItem title={e.title ? e.title.slice(0, 40) : ""} bgcolor={this.props.bgcolor} description={e.description ? e.description.slice(0, 88) : ""} imgageurl={e.urlToImage ? e.urlToImage : "https://images.hindustantimes.com/tech/img/2021/10/02/1600x900/SPACE-EXPLORATION-ISS-1_1631181193265_1633160041618.JPG"} newsurl={e.url} newstime={e.publishedAt.slice(0, 10)} author={e.author} source={e.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News
