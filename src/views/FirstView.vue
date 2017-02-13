<template>
  <div>
    <header class="header">
      <h1 class="logo">
        <a href="/">SAMPLE SITE</a>
      </h1>
      <nav class="global-nav">
        <ul>
          <li class="nav-item active"><a href="#">HOME</a></li>
          <li class="nav-item"><a href="#">ABOUT</a></li>
          <li class="nav-item"><a href="#">NEWS</a></li>
          <li class="nav-item"><a href="#">TOPICS</a></li>
          <li class="nav-item"><a href="#">DOCS</a></li>
          <li class="nav-item"><a href="#">BLOG</a></li>
        </ul>
      </nav>
    </header>
    <div class="wrapper clearfix">
      <main class="main">
      </main>
      <div class="sidemenu">
      </div>
    </div>
    <footer class="footer">
    </footer>
  </div>
</template>

<style lang="stylus">
  @import '../../node_modules/reset-css/reset.css'

  html {
    font-size: 62.5%;
  }

  body {
    color: #333;
    font-size: 1.2rem;
    font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a:link, a:visited, a:hover, a:active {
    color: #d03c56;
    text-decoration: none;
  }

  .header {
    width: 100%;
    padding: 28px 0 10px;
    background: url('/public/first/images/bg-header.gif') repeat-x;
    box-shadow: 0 0 10px 1px #e3e3e3;
  }

  .logo {
    width: 225px;
    height: 56px;
    margin: 0 auto;
    background: url('/public/first/images/logo.png');
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .global-nav {
    margin-top: 15px;
    text-align: center;

    .nav-item {
      display: inline-block;
      margin: 0 10px;

      a {
        display: inline-block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 8px;
        color: #666;
        font-size: 1.3rem;
        letter-spacing: 1px;
        transition: 0.3s;
      }

      &.active a, & a:hover {
        background-color: #d03c56;
        color: #fff;
      }
    }
  }

  .wrapper {
    width: 970px;
    margin: 30px auto 40px;
  }

  .main {
    display: block;
    float: left;
    width: 660px;
  }

  .sidemenu {
    float: right;
    width: 275px;
  }

  .footer {
    width: 100%;
  }
</style>

<script>
export default {
  name: 'hello-view'
};
</script>
