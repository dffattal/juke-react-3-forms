import React from 'react';
import axios from "axios";

export default function NewPlaylist(props){
return (
    <div className="well">
  <form onSubmit = {props.submitThing} className="form-horizontal">
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text"  onChange = {props.filterState} value = {props.value}/>
        </div>
        {props.value.length>16?<div className="alert alert-warning">Too Long</div>:<div/>}
        {props.value.length<1&&props.changed?<div className="alert alert-warning">Not Long Enough</div>:<div/>}
        
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" className="btn btn-success" disabled = {props.value.length>16}>Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)

}