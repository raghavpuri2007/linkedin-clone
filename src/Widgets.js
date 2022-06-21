import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />

        </div>
        {newsArticle("Ukraine boosting 'faltering defense'", "Top news - 650,844 readers")}
        {newsArticle("New Coronavirus Variant: Omicron", "Health - 12933 readers")}
        {newsArticle("Investors predict 2022 recession", "Finance - 6237 readers")}
        {newsArticle("Columbia braces for historic change with new president", "Politics - 3432 readers")}
        {newsArticle("Bitcoin Breaks 19k", "Crypto - 8000 readers")}
        {newsArticle("Meet Raghav Puri", "Top News - 3,529,239 readers")}
    </div>
  )
}

export default Widgets