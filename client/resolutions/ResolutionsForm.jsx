
import React from 'react';

export default class ResolutionsForm extends React.Component {

addResolution(event) {
    event.preventDefault();
   
    var text = this.refs.resolution.value.trim();
     
    
 Meteor.call('addResolution', text, ()=>{ 
  this.refs.resolution.value = "";
});  
  }

    render() {
         return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input 
              type="text" 
               ref="resolution"
               placeholder="Enter a resolution"
               />
      </form>
      )
      }

      }
