import React from 'react';
import CountryChart from '../rust-blog-charts/CountryChart';
import ContinentChart from '../rust-blog-charts/ContinentChart';
import GenderChart from '../rust-blog-charts/GenderChart';
import './blog-theme.css';
import BlogContent0x1 from '../../blogs/0x1.mdx';
import { MDXProvider } from '@mdx-js/react';


const mdxComponents = {
    // You can add custom image or code block components here if needed
    ContinentChart,
    CountryChart,
    GenderChart
};
const RustBlog0x1 = () => {
    // Custom components for MDX (if specific overrides are needed, but CSS handles most)
console.log('MDX components:', mdxComponents);


    return (
        <div className="blog-theme-container">
            <MDXProvider components={mdxComponents}>
                <article className="blog-content">
                    <BlogContent0x1 />
                </article>
            </MDXProvider>

            {/* <section className="blog-charts">
                <h2 className="charts-title">Data Visualizations</h2>

                <div className="chart-wrapper">
                    <h3>Continent Demographics</h3>
                    <ContinentChart />
                </div>

                <div className="chart-wrapper">
                    <h3>Top Countries by Developer Count</h3>
                    <CountryChart />
                </div>

                <div className="chart-wrapper">
                    <h3>Gender Distribution</h3>
                    <GenderChart />
                </div>
            </section> */}
        </div>
    );
};

export default RustBlog0x1;
