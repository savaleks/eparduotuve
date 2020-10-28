import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>KEPURE</h1>
                    <span className='subtitle'>PIRKTI</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>KELNES</h1>
                    <span className='subtitle'>PIRKTI</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>STRIUKES</h1>
                    <span className='subtitle'>PIRKTI</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>VYRISKI</h1>
                    <span className='subtitle'>PIRKTI</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MOTERISKI</h1>
                    <span className='subtitle'>PIRKTI</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;