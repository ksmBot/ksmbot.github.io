import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import './index.css'

export default function () {
    return (
    
        <Layout description='由户山兔兔开发的有趣的邦邦群bot'>
            <div id='index-page-container'>
                <div id='index-page-bg'></div>
                <div id='index-page-bg-mask'></div>
                <div id='index-page-main'>
                    <div id='logo'>
                        <span>ksmの使用文档</span>
                    </div>
                    
                    <div id='index-page-description'>
                        谁不喜欢可可爱爱的ksm呢
                    </div>
                    <div id='index-page-button-container'>
                        <div id='index-page-button'>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/intro">
                                开始查阅
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}