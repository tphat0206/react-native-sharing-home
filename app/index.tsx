import {
  Avatar,
  AvatarFallbackText,
  Badge,
  BadgeText,
  Box,
  Button,
  ButtonText,
  Card,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Box p="$6" bg="$white" flex={1}>
        {/* Header Section */}
        <VStack space="lg" mb="$6">
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Heading size="2xl" color="$primary600">
                Welcome Home
              </Heading>
              <Text size="sm" color="$gray600">
                Your sharing home dashboard
              </Text>
            </VStack>
            <Avatar size="md" bg="$primary600">
              <AvatarFallbackText>User</AvatarFallbackText>
            </Avatar>
          </HStack>
        </VStack>

        {/* Quick Stats Cards */}
        <VStack space="md" mb="$6">
          <Heading size="lg" mb="$2">
            Quick Stats
          </Heading>
          <HStack space="md">
            <Card flex={1} p="$4" bg="$blue50" borderRadius="$lg">
              <VStack space="xs">
                <Text size="sm" color="$gray600">
                  Total Members
                </Text>
                <Heading size="xl" color="$blue600">
                  12
                </Heading>
              </VStack>
            </Card>
            <Card flex={1} p="$4" bg="$green50" borderRadius="$lg">
              <VStack space="xs">
                <Text size="sm" color="$gray600">
                  Active Tasks
                </Text>
                <Heading size="xl" color="$green600">
                  8
                </Heading>
              </VStack>
            </Card>
          </HStack>
        </VStack>

        {/* Recent Activity */}
        <VStack space="md" mb="$6">
          <Heading size="lg" mb="$2">
            Recent Activity
          </Heading>
          <Card p="$4" mb="$3" borderRadius="$lg">
            <HStack justifyContent="space-between" alignItems="center">
              <HStack space="md" alignItems="center" flex={1}>
                <Avatar size="sm" bg="$purple600">
                  <AvatarFallbackText>John Doe</AvatarFallbackText>
                </Avatar>
                <VStack flex={1}>
                  <Text size="sm" fontWeight="$semibold">
                    John Doe
                  </Text>
                  <Text size="xs" color="$gray600">
                    Completed cleaning task
                  </Text>
                </VStack>
              </HStack>
              <Badge action="success" variant="solid" borderRadius="$full">
                <BadgeText>Done</BadgeText>
              </Badge>
            </HStack>
          </Card>

          <Card p="$4" mb="$3" borderRadius="$lg">
            <HStack justifyContent="space-between" alignItems="center">
              <HStack space="md" alignItems="center" flex={1}>
                <Avatar size="sm" bg="$orange600">
                  <AvatarFallbackText>Jane Smith</AvatarFallbackText>
                </Avatar>
                <VStack flex={1}>
                  <Text size="sm" fontWeight="$semibold">
                    Jane Smith
                  </Text>
                  <Text size="xs" color="$gray600">
                    Added grocery shopping
                  </Text>
                </VStack>
              </HStack>
              <Badge action="info" variant="solid" borderRadius="$full">
                <BadgeText>New</BadgeText>
              </Badge>
            </HStack>
          </Card>

          <Card p="$4" mb="$3" borderRadius="$lg">
            <HStack justifyContent="space-between" alignItems="center">
              <HStack space="md" alignItems="center" flex={1}>
                <Avatar size="sm" bg="$cyan600">
                  <AvatarFallbackText>Mike Johnson</AvatarFallbackText>
                </Avatar>
                <VStack flex={1}>
                  <Text size="sm" fontWeight="$semibold">
                    Mike Johnson
                  </Text>
                  <Text size="xs" color="$gray600">
                    Paid monthly rent
                  </Text>
                </VStack>
              </HStack>
              <Badge action="success" variant="solid" borderRadius="$full">
                <BadgeText>Paid</BadgeText>
              </Badge>
            </HStack>
          </Card>
        </VStack>

        {/* Action Buttons */}
        <VStack space="md" mb="$8">
          <Button size="lg" bg="$primary600" borderRadius="$lg">
            <ButtonText>Add New Task</ButtonText>
          </Button>
          <Button size="lg" variant="outline" borderRadius="$lg">
            <ButtonText>View All Activities</ButtonText>
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
