import { css } from 'lit';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
  .nav-method {
    text-align: right;
    margin-right: 11px;
    width: 35px;
  }
  
  .param-name, .param-type {
    text-align: left;
  }
  
  .m-btn {
    box-shadow: none;
  }
  
  .string {
    
  }
  
  .method-fg.patch {
    color: var(--nav-head-color);
  }
  
  .m-btn {
    border: 1px solid var(--primary-color);
  }
  
  h2 {
    margin-top: 24px;
  }
  
  .req-res-title {
    margin-top: 15px;
    margin-bottom: none;
  }
  
  .top-gap {
    margin-top: 24px;
  }
  
  .example-panel {
    border: none;
    background-color: var(--bg3);
  }
`;
