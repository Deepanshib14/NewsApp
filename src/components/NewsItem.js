import React from "react";

const NewsItem=(props)=> {
  
    let { title, description, url, newsurl, author, date,source } =props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',

                    }
                    }> 
                        <span className="badge bg-danger"> {source} </span>
                    </div>

          <img
            src={
              !url
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq_hXsy4MNk6rdCaLTde2rbAe18H8Ba-soA&usqp=CAU"
                : url
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
             
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
