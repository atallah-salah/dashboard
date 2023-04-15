import styles from "./Map.module.scss";
import { MapAjax } from "@syncfusion/ej2-maps";
import { MapsComponent, Inject, LayersDirective, LayerDirective, Zoom } from "@syncfusion/ej2-react-maps";

const maps_style = `
#maps_MapBorder, #maps_MapAreaBorder {
  fill: #eef1fa;
}
`;

function MultilayerMaps() {
  function onMapsLoad(args) {
    let maps = document.getElementById("maps");
    maps.setAttribute("title", "");
  }
  return (
    <div className="control-pane">
      <style>{maps_style}</style>
      <div className="control-section row">
        <div className="col-md-12">
          <MapsComponent
            id="maps"
            loaded={onMapsLoad.bind(this)}
            zoomSettings={{
              enable: true,
              pinchZooming: true,
            }}
          >
            <Inject services={[Zoom]} />
            <LayersDirective>
              <LayerDirective
                shapeData={new MapAjax("https://raw.githubusercontent.com/wjdanalharthi/GeoJSON-of-Saudi-Arabia-Regions/master/data/SA_regions.json")}
                shapeSettings={{
                  fill: "#DBDFF1",
                  border: {
                    color: "white",
                    width: 1,
                  },
                }}
              ></LayerDirective>
            </LayersDirective>
          </MapsComponent>
        </div>
      </div>
    </div>
  );
}

const Map = () => {
  return (
    <div className={styles.map}>
      <h4 className={styles.title}>{"Priority Recommendations"}</h4>

      <div className={styles.container}>
        <MultilayerMaps />
      </div>
    </div>
  );
};

export default Map;
