<template>
    <div id="visualization">
        <h1>{{ msg }}</h1>
        <l-map ref="map"
               :zoom="zoom"
               :center="center"
               :style="style">
            <l-tile-layer :url="url"
                          :attribution="attribution"></l-tile-layer>
            <l-geo-json
                    v-if="show"
                    :geojson="geojson"
                    :options="options"
                    :options-style="styleFunction"
            />
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
    import L from 'leaflet';
    import { LMap, LTileLayer, LMarker, LGeoJson} from 'vue2-leaflet';
    // import geoJsonSample from '../GEOJSON/geoJsonSample';

    import axios from "axios";

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
            LMarker,
            LGeoJson
        },
        data () {
            return {
                zoom:5,
                center: L.latLng(43.092641, -89.532142),
                url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(43.092641, -89.532142),
                style: "height:200px;",
                geojson: null
            }
        },
        methods: {
            mounted() {
                setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
            }
        },
        computed: {
            options() {
                return {
                    onEachFeature: this.onEachFeatureFunction
                };
            },
            styleFunction() {
                const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
                return () => {
                    return {
                        weight: 2,
                        color: "#ECEFF1",
                        opacity: 1,
                        fillColor: fillColor,
                        fillOpacity: 1
                    };
                };
            },
            onEachFeatureFunction() {
                if (!this.enableTooltip) {
                    return () => {};
                }
                return (feature, layer) => {
                    layer.bindTooltip(
                        "<div>code:" +
                        feature.properties.code +
                        "</div><div>nom: " +
                        feature.properties.nom +
                        "</div>",
                        { permanent: false, sticky: true }
                    );
                };
            }
        },
        created() {
            this.loading = true;
            axios
                .get(
                    "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
                )
                .then(response => {
                    this.geojson = response.data;
                    this.loading = false;
                });
            // this.geojson = geoJsonSample; // opens a the local file, maybe?
        }
    }

</script>

<style scoped lang="scss">
    @import "~leaflet/dist/leaflet.css";
</style>