<template>
    <div id="visualization">
        <l-map ref="map"
               :zoom="zoom"
               :center="center"
               style="height:200px;">
            <l-tile-layer :url="url"
                          :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
    import L from 'leaflet';
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


    export default {
        name: 'Visualization',
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        data () {
            return {
                zoom:13,
                center: L.latLng(47.413220, -1.219482),
                url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
            }
        },
        methods: {
            mounted() {
                setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "~leaflet/dist/leaflet.css"

</style>