// import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// export default function fetch() {
//   const { data, error } = useSWR(
//     "https://vimeo.com/api/v2/channel/staffpicks/videos.json",
//     fetcher
//   );
//   return {
//     video: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }
