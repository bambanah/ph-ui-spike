"use client";

import ThemeToggle from "@/components/mantine/theme-toggle";
import WorkbenchDataTable from "@/components/mantine/workbench-data-table";
import WorkbenchUserTable from "@/components/mantine/workbench-user-table";
import { navConfig } from "@/lib/nav-config";
import {
  Anchor,
  AppShell,
  Breadcrumbs,
  Container,
  Group,
  NavLink,
  Paper,
  Space,
  Stack,
  Tabs,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function MantinePage() {
  const [mounted, setMounted] = useState(false);
  const computedColorScheme = useComputedColorScheme();

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AppShell
      navbar={{
        width: 200,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Navbar p="md">
        <Image
          alt="propel logo"
          src={
            computedColorScheme === "dark"
              ? "/ph-banner-light.png"
              : "/ph-banner-dark.png"
          }
          width={8269}
          height={1702}
        />
        <Space h="md" />
        {navConfig.map(({ href, title }) => (
          <NavLink
            key={title}
            href={href}
            label={title}
            active={pathname?.startsWith(href)}
          />
        ))}
        <ThemeToggle />
      </AppShell.Navbar>

      <AppShell.Main bg={computedColorScheme === "dark" ? "#111" : "gray.0"}>
        <Container size="md" pt="md">
          <Breadcrumbs>
            <Anchor href="#">Workbenches</Anchor>
            <span>Test Workbench</span>
          </Breadcrumbs>

          <Space h="xl" />

          <Paper shadow="md" p="md">
            <Tabs defaultValue={"overview"}>
              <Tabs.List>
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="notebooks">Notebooks</Tabs.Tab>
              </Tabs.List>

              <Space h="xl" />

              <Tabs.Panel value="overview">
                <Stack gap="xl">
                  <Stack gap="xs">
                    <Title order={3}>Purpose</Title>
                    <p>
                      Showcasing what a workbench page would look like built
                      with the Mantine library.
                    </p>
                  </Stack>
                  <Stack gap="xs">
                    <Title order={3}>Attachments</Title>
                    <Group gap="xs">
                      <AlertTriangle className="text-red-500" /> No attachments
                      in this workbench
                    </Group>
                  </Stack>
                  <Stack gap="xs">
                    <Title order={3}>Workbench Data</Title>
                    <WorkbenchDataTable />
                  </Stack>
                  <Stack gap="xs">
                    <Title order={3}>Workbench Users</Title>
                    <WorkbenchUserTable />
                  </Stack>
                </Stack>
              </Tabs.Panel>

              <Tabs.Panel value="notebooks">
                <Stack gap="xl"></Stack>
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default MantinePage;
