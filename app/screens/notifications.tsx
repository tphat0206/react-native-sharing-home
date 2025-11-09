import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';
import { Text, Heading } from '@/components/ui/text';
import { Icon, ArrowLeftIcon } from '@/components/ui/icon';


interface NotificationItemProps {
  title: string;
  description: string;
};

function NotificationItem({ title, description }: NotificationItemProps) {
  return (
    <View className="bg-gray-100 rounded-2xl p-4 mb-3">
      <Text size="md" weight="semibold" className="mb-1">
        {title}
      </Text>
      <Text size="sm" className="text-gray-600">
        {description}
      </Text>
    </View>
  );
}

export default function NotificationsScreen() {
  const router = useRouter();

  const notifications = [
    {
      title: 'Notification 1',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
    {
      title: 'Notification 2',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
    {
      title: 'Notification 3',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
    {
      title: 'Notification 4',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
    {
      title: 'Notification 5',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
    {
      title: 'Notification 6',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
    {
      title: 'Notification 7',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
    {
      title: 'Notification 8',
      description: 'Lorem ipsum sit dolor amet, consectetur adipiscing elit. Sed do eiusmod tempor...',
    },
  ];

  return (
    <Box className="flex-1 bg-white my-10">
      <View className="bg-white border-b border-gray-200 px-4 py-3 flex-row items-center py-5">
        <Pressable onPress={() => router.back()} className="mr-4">
          <Icon as={ArrowLeftIcon} size="md" />
        </Pressable>
        <Heading size="sm">Notification</Heading>
      </View>

      {/* Notifications List */}
      <ScrollView className="flex-1 px-4 pt-4 bg-gray-50">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            description={notification.description}
          />
        ))}
      </ScrollView>
    </Box>
  );
}

