import type { User, Message } from "@/types"
import { atom } from "jotai"

const messagesAtom = atom<Message[]>([
  { id: "1", content: "Hey!", variant: "secondary" },
  { id: "2", content: "How are you my friend?", variant: "secondary" },
  { id: "3", content: "Hellow", variant: "primary" },
  {
    id: "4",
    content: "Am good... And how about you dear??",
    variant: "primary",
  },
  { id: "5", content: "Hey!", variant: "secondary" },
  { id: "6", content: "How are you my friend?", variant: "secondary" },
  { id: "7", content: "Hellow", variant: "primary" },
  {
    id: "8",
    content: "Am good... And how about you dear??",
    variant: "primary",
  },
  { id: "9", content: "Hey!", variant: "secondary" },
  { id: "10", content: "How are you my friend?", variant: "secondary" },
  { id: "11", content: "Hellow", variant: "primary" },
  {
    id: "12",
    content: "Am good... And how about you dear??",
    variant: "primary",
  },
  { id: "13", content: "Hey!", variant: "secondary" },
  { id: "14", content: "How are you my friend?", variant: "secondary" },
  { id: "15", content: "Hellow", variant: "primary" },
  {
    id: "16",
    content: "Am good... And how about you dear??",
    variant: "primary",
  },
  { id: "17", content: "Hey!", variant: "secondary" },
  { id: "18", content: "How are you my friend?", variant: "secondary" },
  { id: "19", content: "Hellow", variant: "primary" },
  {
    id: "20",
    content: "Am good... And how about you dear??",
    variant: "primary",
  },
  { id: "21", content: "Hey!", variant: "secondary" },
  { id: "22", content: "How are you my friend?", variant: "secondary" },
  { id: "23", content: "Hellow", variant: "primary" },
  {
    id: "24",
    content: "Am good... And how about you dear??",
    variant: "primary",
  },
])

const usersAtom = atom<User[]>([
  {
    id: "1",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01219__bv4tc7",
    name: "Emisha Lam",
  },
  {
    id: "2",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01216__n2nu6q",
    name: "Elisa Lem",
  },
  {
    id: "3",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01214__u89ja2",
    name: "Amisha Patel",
  },
  {
    id: "4",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/rrv6gfnzswwcc42j8t6x",
    name: "Kiara Advani",
  },
  {
    id: "5",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01217__yr4t1y",
    name: "Alia Bhatt",
  },
  {
    id: "6",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/lyroenfhafmue8qwp9we",
    name: "Deepika Padukone",
  },
  {
    id: "11",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01219__bv4tc7",
    name: "Emisha Lam",
  },
  {
    id: "12",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01216__n2nu6q",
    name: "Elisa Lem",
  },
  {
    id: "13",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01214__u89ja2",
    name: "Amisha Patel",
  },
  {
    id: "14",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/rrv6gfnzswwcc42j8t6x",
    name: "Kiara Advani",
  },
  {
    id: "15",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01217__yr4t1y",
    name: "Alia Bhatt",
  },
  {
    id: "16",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/lyroenfhafmue8qwp9we",
    name: "Deepika Padukone",
  },
  {
    id: "21",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01219__bv4tc7",
    name: "Emisha Lam",
  },
  {
    id: "22",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01216__n2nu6q",
    name: "Elisa Lem",
  },
  {
    id: "23",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01214__u89ja2",
    name: "Amisha Patel",
  },
  {
    id: "24",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/rrv6gfnzswwcc42j8t6x",
    name: "Kiara Advani",
  },
  {
    id: "25",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/ComfyUI_01217__yr4t1y",
    name: "Alia Bhatt",
  },
  {
    id: "26",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_200,h_200/lyroenfhafmue8qwp9we",
    name: "Deepika Padukone",
  },
])

export { messagesAtom, usersAtom }
