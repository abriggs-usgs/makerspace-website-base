export default {
    style: {
        version: 8,
        sources: {
            basemap: {
                type: "vector",
                url: "http://localhost:8086/data/basemap.json"
            },
            HRU: {
                type: "vector",
                url: "http://localhost:8085/data/new2.json"
            }
        },
        "sprite": "",
        "glyphs": "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
        "layers": [
            {
                "id": "Background",
                "type": "background",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "background-color": "rgba(202, 210, 211, 1)"
                }
            },
            {
                "id": "State Color Fill",
                "type": "fill",
                "source": "basemap",
                "source-layer": "states",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "rgba(246, 246, 244, 1)"
                }
            },
            {
                "id": "Neighboring Countries",
                "type": "fill",
                "source": "basemap",
                "source-layer": "neighboringcountry",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "rgba(246, 246, 244, 1)"
                }
            },
            {
                id: "HRUS Fill Colors",
                type: "fill",
                source: "HRU",
                "source-layer": "no_simp_prec5",
                "layout": {
                    "visibility": "visible"
                },
                paint: {
                    "fill-color": {
                        "property": "SoilMoisture",
                        "type": 'categorical',
                        "stops": [
                            ["","#000000"],
                            ["very low","#CC4C02"],
                            ["low", "#EDAA5F"],
                            ["average","#FED98E"],
                            ["high","#A7B9D7"],
                            ["very high","#144873"],
                        ]
                    },
                    "fill-opacity": 1
                }
            },

            {
                id: "HRUS Outlines",
                type: "line",
                source: "HRU",
                "source-layer": "no_simp_prec5",
                "layout": {
                    "visibility": "visible"
                },
                paint: {
                    "line-color": {
                        "property": "SoilMoisture",
                        "type": 'categorical',
                        "stops": [
                            ["","#000000"],
                            ["very low","#823102"],
                            ["low", "#C28C4E"],
                            ["average","#D0B275"],
                            ["high","#8998B0"],
                            ["very high","#113B5F"],
                        ]
                    },
                    "line-width": 1
                },
            },
            {
                "id": "Rivers",
                "type": "line",
                "source": "basemap",
                "source-layer": "USA_Rivers_and_Streams",
                "minzoom": 5,
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(115, 255, 255, 1)"
                }
            },
            {
                "id": "Counties Borders",
                "type": "line",
                "source": "basemap",
                "source-layer": "counties",
                "minzoom": 6,
                "maxzoom": 24,
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(115, 255, 255, 1)"
                }
            },
            {
                "id": "State Borders",
                "type": "line",
                "source": "basemap",
                "source-layer": "states",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(115, 255, 255, 1)",
                    "line-dasharray": [
                        2,
                        1.5
                    ]
                }
            },
            {
                "id": "Cities Dots",
                "type": "circle",
                "source": "basemap",
                "source-layer": "Cities_and_Towns_NTAD",
                "minzoom": 6,
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "circle-radius": 4
                }
            },
            {
                "id": "Cities Names",
                "type": "symbol",
                "source": "basemap",
                "source-layer": "Cities_and_Towns_NTAD",
                "minzoom": 6,
                "layout": {
                    "visibility": "visible",
                    "text-field": "{NAME}",
                    "text-font": [
                        "Roboto Regular"
                    ],
                    "text-size": 12,
                    "symbol-placement": "point",
                    "text-line-height": 1.2,
                    "text-justify": "center",
                    "text-anchor": "bottom",
                    "text-offset": [
                        0,
                        -0.5
                    ]
                },
                "paint": {
                    "text-color": "rgba(255,255,255, 1)",
                    "text-halo-width": 1,
                    "text-halo-blur": 1,
                    "text-halo-color": "rgba(0, 0, 0, 0.5)",
                }
            }
        ]
    }
};