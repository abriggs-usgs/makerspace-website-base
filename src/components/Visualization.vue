<template>
  <div id="viz_container">
    <div class="usa-prose">
      <h2 class="title-text">
        {{ title }}
      </h2>
    </div>
    <hr>

    <nav id="menu"></nav>
    <MglMap id="map"
        :accessToken="accessToken"
        :container="container"
        :mapStyle="mapStyle"
        :zoom="zoom"
        :minZoom="minZoom"
        :maxZoom="maxZoom"
        :center="center"
        :attributionControl="false"
    >
      <MglScaleControl position="bottom-right" />
      <MglNavigationControl position="bottom-right" />
      <MglGeolocateControl position="bottom-right" />
      <MglFullscreenControl position="bottom-right" />
    </MglMap>

  </div>
</template>

<script>
    import {
        MglMap,
        MglNavigationControl,
        MglGeolocateControl,
        MglFullscreenControl,
        MglScaleControl
    } from "vue-mapbox";
    import mapStyles from '../assets/mapStyles/mapStyles';

    export default {
        components: {
            MglMap,
            MglNavigationControl,
            MglGeolocateControl,
            MglFullscreenControl,
            MglScaleControl
        },
        name: 'MapBox',
        props: {
            title: {
                type: String,
                default: 'Add your title in App.vue or make this blank'
            }
        },
        data() {
            return {
                accessToken: 'pk.eyJ1IjoiYWJyaWdncyIsImEiOiJjandrd3J4bmMwcjNpNGFxZ2hoZGE2djR5In0.gKPNdhLzvbzui4aiIwAihA',
                mapStyle: mapStyles.style,
                container: 'map',
                zoom: 4,
                minZoom: 4,
                maxZoom: 8,
                center: [-95.7129, 37.0902]
            }
        }
    }
</script>


<style scoped lang="scss">
  @import"~mapbox-gl/dist/mapbox-gl.css";

  #map {
    height: 900px;
  }

  .title-text {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
  }

  hr {
    margin: 2px 0 0 0;
    padding-bottom: 0;
  }

</style>

