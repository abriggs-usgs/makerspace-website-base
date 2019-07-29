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
        :container="container"
        :mapStyle="mapStyle"
        :zoom="zoom"
        :minZoom="minZoom"
        :maxZoom="maxZoom"
        :center="center"
    >
      <MglScaleControl position="bottom-right"
      unit="imperial"/>
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
    import mapboxgl from "mapbox-gl";

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
                mapStyle: mapStyles.style,
                container: 'map',
                zoom: 4,
                minZoom: 4,
                maxZoom: 8,
                center: [-95.7129, 37.0902]
            }
        },
        mounted() {
            this.mapboxgl = mapboxgl;
            let toggleableLayerIds = [ 'basemap', 'HRU' ];

            for (let i = 0; i < toggleableLayerIds.length; i++) {
                let id = toggleableLayerIds[i];

                let link = document.createElement('a');
                link.href = '#';
                link.className = 'active';
                link.textContent = id;

                link.onclick = function (e) {
                    let clickedLayer = this.textContent;
console.log('layer clicked: ' + clickedLayer)
                    e.preventDefault();
                    e.stopPropagation();

                    let visibility = this.mapboxgl.getLayoutProperty(clickedLayer, 'visibility');

                    if (visibility === 'visible') {
                        this.mapboxgl.setLayoutProperty(clickedLayer, 'visibility', 'none');
                        this.className = '';
                    } else {
                        this.className = 'active';
                        this.mapboxgl.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                    }
                };

                let layers = document.getElementById('menu');
                layers.appendChild(link);
            }
        },

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

