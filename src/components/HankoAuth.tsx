// "use client";

// import { useEffect, useCallback, useState } from "react";
// import { useRouter } from "next/navigation";
// import { register } from "@teamhanko/hanko-elements";

// // @ts-ignore
// import type { Hanko } from "@teamhanko/hanko-elements";

// declare const process: {
//   env: {
//     HANKO_API_URL: string;
//   };
// };
// const hankoApi = process.env.HANKO_API_URL;

// console.log(hankoApi);
// export default function HankoAuth() {
//   const router = useRouter();

//   const [hanko, setHanko] = useState<Hanko>();

//   useEffect(() => {
//     import("@teamhanko/hanko-elements").then(({ Hanko }) =>
//       setHanko(new Hanko(hankoApi))
//     );
//   }, []);

//   const redirectAfterLogin = useCallback(() => {
//     // successfully logged in, redirect to a page in your application
//     router.replace("/dashboard");
//   }, [router]);

//   useEffect(
//     () =>
//       hanko?.onAuthFlowCompleted(() => {
//         redirectAfterLogin();
//       }),
//     [hanko, redirectAfterLogin]
//   );

//   useEffect(() => {
//     register(hankoApi).catch((error) => {
//       // handle error
//     });
//   }, []);

//   return <hanko-auth />;
// }
