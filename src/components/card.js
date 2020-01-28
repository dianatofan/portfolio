import React from "react";

export default () => {
  const data = useStaticQuery(graphql`
  query {
    imageOne: file(relativePath: { eq: "img.png" }) {
      childImageSharp {
        fixed(width: 550, height: 400, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

return (
<div class="rectangle time-series">
<div class="title">
  Visual Exploration of Self-Tracking Data
</div>
<div class="description">
  Research project exploring the visualization of time-oriented data
</div>
<div class="button" onclick="redirect('timeSeries')">See more <i class="fas fa-arrow-right"></i></div>
<img src="img/img.png" alt="time series" />
</div>
)
}
