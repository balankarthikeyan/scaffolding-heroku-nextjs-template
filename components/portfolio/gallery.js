import * as React from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
  transitionDuration: 0
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
          <p className="legend">Legend 7</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
          <p className="legend">Legend 8</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
          <p className="legend">Legend 9</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
          <p className="legend">Legend 10</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
          <p className="legend">Legend 11</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
          <p className="legend">Legend 12</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
          <p className="legend">Legend 13</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
          <p className="legend">Legend 14</p>
        </div>
      </div>
    )

    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    )
  }
}

export default Gallery
