/* 'use client'
import { useState, useMemo, useEffect, Dispatch } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { FormValues } from "@/types/types";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
type Props = {
  formValues?: FormValues;
  setFormValues: any;
  inputType: "start" | "end" | "stops";
  setSelected?: any;
}
export default function Places({formValues, setFormValues, inputType} : Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded) return <div><Loader2 className="mr-2 h-4 w-4 animate-spin" /></div>;
  return <Map inputType={inputType} setFormValues={setFormValues} />;
}

function Map({setFormValues, inputType} : Props) {
  const [selected, setSelected] = useState(null);
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  useEffect(() => { console.log(selected) }, [selected])
  return (
    <>
      <div className="places-container my-4">
        <PlacesAutocomplete setFormValues={setFormValues} inputType={inputType} setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setFormValues, inputType, formValues, setSelected } : Props) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address : string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    // setSelected({ lat, lng, address}); 
    if (inputType !== "stops") {
      setFormValues((prev : FormValues) => ({
        ...prev,
        [inputType]: { lat, lng, address }
      }))
    } else {
      setFormValues((prev : FormValues) => ({
        ...prev,
        stops: [...prev.stops, { lat, lng, address }]
      }))
      setValue("")
    }
setSelected({ lat, lng})
  };
useEffect(() => { console.log(value) }, [value])
  return (
    <>
 
      <Combobox  onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => {setValue(e.target.value) 
            console.log(value)}}
          disabled={!ready}
          className="combobox-input p-4 border border-gray-300 rounded-lg w-full"
          placeholder="Search an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  );
}; */
