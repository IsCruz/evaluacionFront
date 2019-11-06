import React from 'react'


function CardResource (props) {
  return (
    <div key={props.key}>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{props.data.firstName}, {props.data.lastName}</span>
              <p>{props.data.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ListResources (props) {
  const dataForList = props.resources;
  const dataListed = dataForList.map((data, key) => {
    return <CardResource key={key} data= {data} />;
  });
  return (
    <div>
      {dataListed}
    </div>
  );
};


function ResourcesList (props) {
  const listResources = props.resources;
  const listHandler = data => {
    if( data.length === 0) {
      return (
          <div> You have Resources Available. <br /> Take A Potato 🥔 </div>
      );
  } else {
      return (
         <ListResources resources={data} />
      )
  }
  };

  return (
    <div>
      {listHandler(listResources)}
    </div>
  )
}

export default ResourcesList
