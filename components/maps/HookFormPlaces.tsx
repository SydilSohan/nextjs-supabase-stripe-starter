'use client'
import {  useEffect, useMemo,  } from "react";
import {  useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {  Loader2 } from "lucide-react";
type Props = {
  form : any;
  string : string,
 point : string;
}
export default function SimpleAutoComplete({form, string, point} : Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded) return <div><Loader2 className="mr-2 h-4 w-4 animate-spin" /></div>;
  return <Map form={form} point={point} string={string}  />;
}

function Map({form, point, string} : Props) {
  return (
    <>
      <div className="places-container my-4">
        <PlacesAutocomplete form={form} point={point} string={string}  />
      </div>

  
    </>
  );
}

const PlacesAutocomplete = ({form, point, string} : Props) => {
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
    form.setValue(string, address)
    const results =  await getGeocode({ address })
    const { lat, lng } = await getLatLng(results[0]);
    form.setValue(point, {
      address,
      lat,
      lng
    })
 
  };

  return (
    <>
 
      <Combobox  onSelect={handleSelect}>
        <ComboboxInput
          value={form.getValues(string)}
          onChange={(e) => {setValue(e.target.value) 
            form.setValue(string, e.target.value)
        }}
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
      
{/* <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="max-w-fit min-w-[70%]">
              <FormLabel>Long Description</FormLabel>
              <FormControl>
              <Command  className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
       { status === "OK" && data?.map(({place_id, description}) => (
          <CommandItem key={place_id} value={description}   onSelect={() => {
            form.setValue(name, description)
          }}>

            <Check
              className={`w-4 h-4 ${description === field.value ? 'opacity-100' : 'opacity-0'}`}
            />
            {description}
            
          </CommandItem>
          
         ))}
         
          </CommandGroup>

      </CommandList>
    </Command>
              </FormControl>
              <FormDescription>
                Visible to route purchasers.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
    </>
  );
};