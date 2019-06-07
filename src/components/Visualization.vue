<template>
    <div id="visualization">
        <h1>{{ msg }}</h1>
        <l-map ref="map"
               :zoom="zoom"
               :center="center"
               :style="style">
            <l-tile-layer :url="url"
                          :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
    import L from 'leaflet';
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    export default {
        name: 'Visualization',
        props: {
            msg: String
        },
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        data () {
            return {
                zoom: 5,
                center: L.latLng(43.092641, -89.532142),
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(43.092641, -89.532142),
                style: "height:200px;"
            }
        },
        methods: {
            mounted() {
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'))
                }, 250);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~leaflet/dist/leaflet.css";
</style>