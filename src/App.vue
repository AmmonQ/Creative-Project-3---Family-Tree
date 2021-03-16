<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/view">Navigate</router-link> 
        <router-link to="/saved">Saved People</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}
    
    a:active {
        color: white;
        text-decoration: none;
    }
    
    a:visited {
        color: white;
        text-decoration: none;
    }
    
    a {
        text-decoration: none;
        background-color: #CC2936;
        padding: 1em;
        margin-left: 1em;
        margin-right: 1em;
        border-radius: 3em;
        min-width: 130px;
        display: inline-block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
</style>
