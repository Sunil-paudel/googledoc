"use client"
import { Container } from "@mui/material";
import ExportButton from "./exportdoc/page";
import { useSession } from "next-auth/react";
import { useRouter} from "next/navigation";

 

export default function Home() {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  return (
    <Container>
   <ExportButton   />
      </Container>
  );
}
