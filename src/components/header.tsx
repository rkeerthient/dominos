import * as React from "react";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  { label: "Home", url: "/en/5923211330787565604" },
  {
    label: "order online",
    url: "/en/5923211330787565604",
  },
  {
    label: "menu",
    url: "/en/5923211330787565604",
  },
  {
    label: "COUPONS",
    url: "/en/5923211330787565604",
  },
  {
    label: "TRACKER",
    url: "/en/5923211330787565604",
  },
  {
    label: "LOCATIONS",
    url: "/locations",
  },
  {
    label: "REWARDS",
    url: "/en/5923211330787565604",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label} className="">
      <a
        href={link.url}
        className="uppercase hover:bg-[#00587c] py-4 px-4 hover:cursor-pointer"
      >
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="bg-[#006491]">
      <div className="centered-container !py-0">
        <nav className="flex items-center justify-start gap-10">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDZweCIgaGVpZ2h0PSI0OXB4IiB2aWV3Qm94PSIwIDAgNDYgNDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+bWVudS1icmFuZDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjUuMzY0NTM2MzFlLTA2IDAuMTg2MjE0Mjg2IDQ1Ljk5MjM0NjIgMC4xODYyMTQyODYgNDUuOTkyMzQ2MiA0Ni4xODI2NjQxIDUuMzY0NTM2MzFlLTA2IDQ2LjE4MjY2NDEiPjwvcG9seWdvbj4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjAuMjEzOSAwLjAxNDQ2NDI4NTcgNS41NTY2ODU3MSAwLjAxNDQ2NDI4NTcgNS41NTY2ODU3MSA1LjM1NzE0Mjg2IDAuMjEzOSA1LjM1NzE0Mjg2Ij48L3BvbHlnb24+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im1lbnUvbWVudS1icmFuZCI+CiAgICAgICAgICAgIDxnIGlkPSJtZW51LWJyYW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDI4MDcxKSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0yIj48L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LjE3MjU2NDMsMTMuNDk4NjUgTDMyLjY3OTcwNzEsMS4wMDU3OTI4NiBDMzEuNTkzOTIxNCwtMC4wODQwNjQyODU3IDI5LjgyOTkyMTQsLTAuMDg3NDkyODU3MSAyOC43NDAwNjQzLDAuOTk4MjkyODU3IEwyOC43MzI1NjQzLDEuMDA1NzkyODYgTDE4LjI1NjEzNTcsMTEuNDgyMjIxNCBMMC44MTk3MDcxNDMsMjguOTIwNzkyOSBDLTAuMjcwMTUsMzAuMDA2NzkyOSAtMC4yNzM3OTI4NTcsMzEuNzcwMzY0MyAwLjgxMjIwNzE0MywzMi44NjA0MzU3IEwwLjgxOTcwNzE0MywzMi44Njc5MzU3IEwxMy4zMTI1NjQzLDQ1LjM2MjkzNTcgQzE0LjM5ODM1LDQ2LjQ1MzAwNzEgMTYuMTYyMTM1Nyw0Ni40NTYyMjE0IDE3LjI1MjIwNzEsNDUuMzcwNjUgQzE3LjI1NDU2NDMsNDUuMzY4MDc4NiAxNy4yNTcxMzU3LDQ1LjM2NTUwNzEgMTcuMjU5NzA3MSw0NS4zNjI5MzU3IEwzMi44ODk3MDcxLDI5LjczMDc5MjkgTDQ1LjE3MjU2NDMsMTcuNDQ3OTM1NyBDNDYuMjYyNjM1NywxNi4zNjIxNSA0Ni4yNjYwNjQzLDE0LjU5ODM2NDMgNDUuMTgwMDY0MywxMy41MDgyOTI5IEw0NS4xNzI1NjQzLDEzLjUwMDc5MjkiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ0LjI4OTY4NTcsMTQuNDE1OTg1NyBMMzEuNzk2ODI4NiwxLjkzMTcgQzMxLjE5NDQ3MTQsMS4zMjk1NTcxNCAzMC4yMTc5NzE0LDEuMzI5NTU3MTQgMjkuNjE1NjE0MywxLjkzMTcgTDE2LjExNTQsMTUuNDMxNyBMMzAuNzg3NTQyOSwzMC4xMDM4NDI5IEw0NC4yODc1NDI5LDE2LjYwMzg0MjkgQzQ0Ljg4OTksMTYuMDAxNDg1NyA0NC44ODk5LDE1LjAyNDk4NTcgNDQuMjg3NTQyOSwxNC40MjI0MTQzIE0zMy4zMDMyNTcxLDE4LjAyNjcgQzMxLjg4NDQ3MTQsMTkuNDMxNTU3MSAyOS41OTU2ODU3LDE5LjQyMDIgMjguMTkxMDQyOSwxOC4wMDE0MTQzIEMyNi43ODYxODU3LDE2LjU4Mjg0MjkgMjYuNzk3NTQyOSwxNC4yOTQwNTcxIDI4LjIxNjExNDMsMTIuODg5MiBDMjkuNjM0Njg1NywxMS40ODQzNDI5IDMxLjkyMzY4NTcsMTEuNDk1NyAzMy4zMjg1NDI5LDEyLjkxNDQ4NTcgQzM0LjAwMTE4NTcsMTMuNTkzNzcxNCAzNC4zNzcyNTcxLDE0LjUxMTk4NTcgMzQuMzc0Njk4OCwxNS40NjgxMjg2IEMzNC4zNzIxMTQzLDE2LjQyOTYyODYgMzMuOTg2NCwxNy4zNTAyIDMzLjMwMzI1NzEsMTguMDI2NyIgaWQ9IkZpbGwtNCIgZmlsbD0iI0QzMTgzNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNzAyNTg1NzEsMjkuODMxNzg1NyBDMS4xMDAyMjg1NywzMC40MzQzNTcxIDEuMTAwMjI4NTcsMzEuNDEwNjQyOSAxLjcwMjU4NTcxLDMyLjAxMzIxNDMgTDE0LjE5NTQ0MjksNDQuNTA4MjE0MyBDMTQuNzk3OCw0NS4xMTAzNTcxIDE1Ljc3NDMsNDUuMTEwMzU3MSAxNi4zNzY4NzE0LDQ0LjUwODIxNDMgTDI5Ljg3Njg3MTQsMzEuMDA4MjE0MyBMMTUuMjAyNTg1NywxNi4zMzE3ODU3IEwxLjcwMjU4NTcxLDI5LjgzMTc4NTcgWiBNMTIuNTIxODcxNCwzMy40MzE3ODU3IEMxMS4xMDg0NDI5LDM0Ljg1MTg1NzEgOC44MTE1MTQyOSwzNC44NTc0Mjg2IDcuMzkxMjI4NTcsMzMuNDQ0IEM1Ljk3MTE1NzE0LDMyLjAzMDc4NTcgNS45NjU1ODU3MSwyOS43MzM2NDI5IDcuMzc5MDE0MjksMjguMzEzMzU3MSBDOC43OTI0NDI4NiwyNi44OTMyODU3IDExLjA4OTM3MTQsMjYuODg3OTI4NiAxMi41MDk2NTcxLDI4LjMwMTE0MjkgQzEzLjE5MDY1NzEsMjguOTc5MTQyOSAxMy41NzUwODU3LDI5Ljg5OTI4NTcgMTMuNTc4MzIzLDMwLjg2MDM1NzEgQzEzLjU4MTcyODYsMzEuODIzNzg1NyAxMy4yMDE1ODU3LDMyLjc0ODg1NzEgMTIuNTIxODcxNCwzMy40MzE3ODU3IEwxMi41MjE4NzE0LDMzLjQzMTc4NTcgWiBNMTguMDIyNTg1NywyOC40NTgyMTQzIEMxOS40MzQ3Mjg2LDI3LjA0ODY0MjkgMjEuNzIyNDQyOSwyNy4wNTA3ODU3IDIzLjEzMTgsMjguNDYzMTQyOSBDMjQuNTQxNTg1NywyOS44NzU1IDI0LjUzOTIyODYsMzIuMTYzIDIzLjEyNjg3MTQsMzMuNTcyNTcxNCBDMjEuNzE0NTE0MywzNC45ODIxNDI5IDE5LjQyNzAxNDMsMzQuOTc5Nzg1NyAxOC4wMTc0NDI5LDMzLjU2NzY0MjkgQzE3LjM0MTgsMzIuODkwNSAxNi45NjIwODU3LDMxLjk3MzE0MjkgMTYuOTYxODY4MiwzMS4wMTY3ODU3IEMxNi45NjA1ODU3LDMwLjA1Njc4NTcgMTcuMzQyMjI4NiwyOS4xMzU3ODU3IDE4LjAyMjU4NTcsMjguNDU4MjE0MyBMMTguMDIyNTg1NywyOC40NTgyMTQzIFoiIGlkPSJGaWxsLTYiIGZpbGw9IiMwMDc4QUUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDAwMDAwLCA0Mi4yNDIzNTcpIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTkiPjwvZz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi4yNTQxMTQyOSwyLjUwNDQ2NDI5IEwyLjQ4NzksMi41MDQ0NjQyOSBDMi44MjAyNTcxNCwyLjUwNDQ2NDI5IDMuMDI2NjE0MjksMi40OTE2MDcxNCAzLjEwNjc1NzE0LDIuNDY2MTA3MTQgQzMuMTg3MTE0MjksMi40NDA2MDcxNCAzLjI1MDMyODU3LDIuMzk1ODIxNDMgMy4yOTY4Mjg1NywyLjMzMTc1IEMzLjM0MzMyODU3LDIuMjY3ODkyODYgMy4zNjY0NzE0MywyLjE5NTQ2NDI5IDMuMzY2NDcxNDMsMi4xMTM4MjE0MyBDMy4zNjY0NzE0MywyLjAzNDk2NDI5IDMuMzQzOTcxNDMsMS45NjQ0NjQyOSAzLjI5ODU0Mjg2LDEuOTAyNzUgQzMuMjUzMzI4NTcsMS44NDEyNSAzLjE4ODgyODU3LDEuNzk3MTA3MTQgMy4xMDUyNTcxNCwxLjc3MDMyMTQzIEMzLjAyMTQ3MTQzLDEuNzQzNTM1NzEgMi44MTU1NDI4NiwxLjczMDI1IDIuNDg3OSwxLjczMDI1IEwyLjI1NDExNDI5LDEuNzMwMjUgTDIuMjU0MTE0MjksMi41MDQ0NjQyOSBaIE0xLjY3ODc1NzE0LDQuMTE1Njc4NTcgTDEuNjc4NzU3MTQsMS4yODA0NjQyOSBMMi4yNTQxMTQyOSwxLjI4MDQ2NDI5IEMyLjc5MzY4NTcxLDEuMjgwNDY0MjkgMy4wOTU4Mjg1NywxLjI4MjgyMTQzIDMuMTYwNzU3MTQsMS4yODczMjE0MyBDMy4zNTE0NzE0MywxLjMwMzYwNzE0IDMuNDk5NTQyODYsMS4zNDEzMjE0MyAzLjYwNTYxNDI5LDEuNDAwNjc4NTcgQzMuNzExMjU3MTQsMS40NjAwMzU3MSAzLjc5OTU0Mjg2LDEuNTUwNjc4NTcgMy44NzA2ODU3MSwxLjY3MjYwNzE0IEMzLjk0MTQsMS43OTQ3NSAzLjk3Njk3MTQzLDEuOTMwMTc4NTcgMy45NzY5NzE0MywyLjA3OTEwNzE0IEMzLjk3Njk3MTQzLDIuMjgzNzUgMy45MTAxMTQyOSwyLjQ1ODYwNzE0IDMuNzc2NCwyLjYwMzg5Mjg2IEMzLjY0MjY4NTcxLDIuNzQ5MTc4NTcgMy40NTQ5NzE0MywyLjgzOTE3ODU3IDMuMjEzMjU3MTQsMi44NzQxMDcxNCBDMy4yOTkxODU3MSwyLjkwNjY3ODU3IDMuMzY1NjE0MjksMi45NDIwMzU3MSAzLjQxMTksMi45ODA2MDcxNCBDMy40NTg0LDMuMDE4NzUgMy41MjI0NzE0MywzLjA5MTM5Mjg2IDMuNjAzOSwzLjE5ODMyMTQzIEMzLjYyNDY4NTcxLDMuMjI2MzkyODYgMy42OTQ1NDI4NiwzLjM0MTQ2NDI5IDMuODEzMDQyODYsMy41NDM3NSBMNC4xNDc3NTcxNCw0LjExNTY3ODU3IEwzLjQzNjU0Mjg2LDQuMTE1Njc4NTcgTDMuMTk5MzI4NTcsMy42NTUxNzg1NyBDMy4wMzg4Mjg1NywzLjM0NjE3ODU3IDIuOTA2NCwzLjE1MTM5Mjg2IDIuODAxODI4NTcsMy4wNzEyNSBDMi42OTcwNDI4NiwyLjk5MTEwNzE0IDIuNTY0NCwyLjk1MDgyMTQzIDIuNDA0MTE0MjksMi45NTA4MjE0MyBMMi4yNTQxMTQyOSwyLjk1MDgyMTQzIEwyLjI1NDExNDI5LDQuMTE1Njc4NTcgTDEuNjc4NzU3MTQsNC4xMTU2Nzg1NyBaIE0yLjg4ODgyODU3LDAuNTM3NTM1NzE0IEMyLjUyMTU0Mjg2LDAuNTM3NTM1NzE0IDIuMTY5MjU3MTQsMC42Mjk0NjQyODYgMS44MzIxODU3MSwwLjgxMjg5Mjg1NyBDMS40OTUxMTQyOSwwLjk5Njc1IDEuMjI5NCwxLjI2MDUzNTcxIDEuMDM1MjU3MTQsMS42MDQ2Nzg1NyBDMC44NDExMTQyODYsMS45NDg4MjE0MyAwLjc0NDA0Mjg1NywyLjMwOTI1IDAuNzQ0MDQyODU3LDIuNjg1OTY0MjkgQzAuNzQ0MDQyODU3LDMuMDYwMTA3MTQgMC44Mzg3NTcxNDMsMy40MTcxMDcxNCAxLjAyODQsMy43NTY1MzU3MSBDMS4yMTc4Mjg1Nyw0LjA5NTk2NDI5IDEuNDgyMjU3MTQsNC4zNjA4MjE0MyAxLjgyMTY4NTcxLDQuNTUxNTM1NzEgQzIuMTYxMTE0MjksNC43NDIwMzU3MSAyLjUxNzA0Mjg2LDQuODM3NjA3MTQgMi44ODg4Mjg1Nyw0LjgzNzYwNzE0IEMzLjI2MzE4NTcxLDQuODM3NjA3MTQgMy42MTk1NDI4Niw0Ljc0MjAzNTcxIDMuOTU3Njg1NzEsNC41NTE1MzU3MSBDNC4yOTYwNDI4Niw0LjM2MDgyMTQzIDQuNTYwNDcxNDMsNC4wOTU5NjQyOSA0Ljc1MDk3MTQzLDMuNzU2NTM1NzEgQzQuOTQxNjg1NzEsMy40MTcxMDcxNCA1LjAzNzA0Mjg2LDMuMDYwMTA3MTQgNS4wMzcwNDI4NiwyLjY4NTk2NDI5IEM1LjAzNzA0Mjg2LDIuMzA5MjUgNC45Mzk5NzE0MywxLjk0ODgyMTQzIDQuNzQ1ODI4NTcsMS42MDQ2Nzg1NyBDNC41NTE5LDEuMjYwNTM1NzEgNC4yODU1NDI4NiwwLjk5Njc1IDMuOTQ3MTg1NzEsMC44MTI4OTI4NTcgQzMuNjA5MDQyODYsMC42Mjk0NjQyODYgMy4yNTYzMjg1NywwLjUzNzUzNTcxNCAyLjg4ODgyODU3LDAuNTM3NTM1NzE0IEwyLjg4ODgyODU3LDAuNTM3NTM1NzE0IFogTTIuODg1NCwwLjAxNDQ2NDI4NTcgQzMuMzQzMzI4NTcsMC4wMTQ0NjQyODU3IDMuNzgyODI4NTcsMC4xMjg4OTI4NTcgNC4yMDM2ODU3MSwwLjM1Nzk2NDI4NiBDNC42MjQ1NDI4NiwwLjU4NzAzNTcxNCA0Ljk1NDk3MTQzLDAuOTE1MzIxNDI5IDUuMTk1ODI4NTcsMS4zNDMyNSBDNS40MzY0NzE0MywxLjc3MDk2NDI5IDUuNTU2Njg1NzEsMi4yMTgzOTI4NiA1LjU1NjY4NTcxLDIuNjg1OTY0MjkgQzUuNTU2Njg1NzEsMy4xNTA5NjQyOSA1LjQzODYxNDI5LDMuNTk0MzIxNDMgNS4yMDI5LDQuMDE2MjUgQzQuOTY2NzU3MTQsNC40MzgxNzg1NyA0LjYzNzgyODU3LDQuNzY3MzIxNDMgNC4yMTU2ODU3MSw1LjAwMzAzNTcxIEMzLjc5Mzk3MTQzLDUuMjM5MTc4NTcgMy4zNTA0LDUuMzU3MjUgMi44ODU0LDUuMzU3MjUgQzIuNDIwMTg1NzEsNS4zNTcyNSAxLjk3NjgyODU3LDUuMjM5MTc4NTcgMS41NTQ5LDUuMDAzMDM1NzEgQzEuMTMyOTcxNDMsNC43NjczMjE0MyAwLjgwMzgyODU3MSw0LjQzODE3ODU3IDAuNTY3OSw0LjAxNjI1IEMwLjMzMTk3MTQyOSwzLjU5NDMyMTQzIDAuMjEzOSwzLjE1MDk2NDI5IDAuMjEzOSwyLjY4NTk2NDI5IEMwLjIxMzksMi4yMTgzOTI4NiAwLjMzNDMyODU3MSwxLjc3MDk2NDI5IDAuNTc0OTcxNDI5LDEuMzQzMjUgQzAuODE1NjE0Mjg2LDAuOTE1MzIxNDI5IDEuMTQ2MjU3MTQsMC41ODcwMzU3MTQgMS41NjcxMTQyOSwwLjM1Nzk2NDI4NiBDMS45ODc5NzE0MywwLjEyODg5Mjg1NyAyLjQyNzQ3MTQzLDAuMDE0NDY0Mjg1NyAyLjg4NTQsMC4wMTQ0NjQyODU3IEwyLjg4NTQsMC4wMTQ0NjQyODU3IFoiIGlkPSJGaWxsLTgiIGZpbGw9IiNGRkZGRkYiIG1hc2s9InVybCgjbWFzay00KSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
            width="50"
            height="50"
          ></img>
          <div className="flex gap-x-10 text-white font-semibold ">
            {linkDoms}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
