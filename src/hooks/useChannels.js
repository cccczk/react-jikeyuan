import { useEffect,useState } from "react";

import { getChannelsAPI } from "@/apis/other";

function useChannel() {
    const [channels, setChannels] = useState([]);
      useEffect(() => {
        getChannelsAPI().then((res) => {
          console.log(res.data.channels);
          setChannels(res.data.channels);
        });
      }, []);
    return {channels}
}

export {useChannel}