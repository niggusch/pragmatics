<?php get_header(); ?>
  <header>
    <nav id="navigation" class="navbar navbar-default animated" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header" animate="bounceInRight" >
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" animate="bounceInLeft" delay="0.1s">
            <div class="special">pragmatics GmbH</div>
            <!--<div class="charis">[p&#x280;&#x0251;g&#x02D1;ma&#x2D0;tiks]</div>-->
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li ui-sref-active="active" animate="bounceInLeft" delay="0.2s"><a ui-sref="posts" href="#posts" section="#posts">Posts</a></li>
            <li ui-sref-active="active" animate="bounceInLeft" delay="0.2s"><a ui-sref="pages" href="#pages" section="#pages">Pages</a></li>
            <li animate="bounceInRight" delay="0.3s"><a  href="#firstSection" section="#firstSection">1. Section</a></li>
            <li animate="bounceInRight" delay="0.3s"><a  href="#secondSection" section=#secondSection>2. Section</a></li>
            <li animate="bounceInLeft" delay="0.4s"><a href="#thirdSection" section=#thirdSection>3. Section</a></li>
            <li animate="bounceInRight" delay="0.3s"><a  href="#carouselSection" section=#carouselSection>Carousel</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <pragmatics-state-debug></pragmatics-state-debug>

  <pragmatics-ui-section element-id="posts" delegate-view="posts" color="jordi"></pragmatics-ui-section>

  <pragmatics-ui-section element-id="pages" delegate-view="pages" color="lapis"></pragmatics-ui-section>

  <pragmatics-section element-id="firstSection" color="lapis"></pragmatics-section>

  <pragmatics-section element-id="secondSection" color="jordi"></pragmatics-section>

  <pragmatics-section element-id="thirdSection" color="steel"></pragmatics-section>

  <pragmatics-carousel element-id="carouselSection"></pragmatics-carousel>

<?php get_footer(); ?>
