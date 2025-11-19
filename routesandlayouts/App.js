import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

// Simple Profile App with Random Name + Random Image Generator
// - Press "Randomize" to generate a new random name and avatar
// - Uses i.pravatar.cc for placeholder avatars (works in Expo)
// - Self-contained (no external native modules required)

const FIRST_NAMES = ['Aarav','Suman','Maya','Riya','Vikram','Neha','Karan','Diya','Rahul','Anika'];
const LAST_NAMES = ['Gowda','Sharma','Patel','Rao','Iyer','Kumar','Singh','Naik','Shetty','Nair'];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeRandomName() {
  const f = FIRST_NAMES[randomInt(0, FIRST_NAMES.length - 1)];
  const l = LAST_NAMES[randomInt(0, LAST_NAMES.length - 1)];
  return `${f} ${l}`;
}

function makeRandomAvatarUrl() {
  // i.pravatar.cc provides simple random avatars. We pick an id between 1 and 70.
  // Example: https://i.pravatar.cc/150?img=5
  const id = randomInt(1, 70);
  return `https://i.pravatar.cc/300?img=${id}`;
}

export  function App() {
  const [name, setName] = useState(makeRandomName());
  const [email, setEmail] = useState(() => `${name.split(' ')[0].toLowerCase()}@example.com`);
  const [avatar, setAvatar] = useState(makeRandomAvatarUrl());

  function randomize() {
    const newName = makeRandomName();
    setName(newName);
    setEmail(`${newName.split(' ')[0].toLowerCase()}@example.com`);
    setAvatar(makeRandomAvatarUrl());
  }

  function showInfo() {
    Alert.alert('Profile Info', `Name: ${name}
Email: ${email}`);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.card}>
        <Image source={{ uri: avatar }} style={styles.avatar} />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={randomize}>
            <Text style={styles.buttonText}>Randomize</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.infoButton]} onPress={showInfo}>
            <Text style={[styles.buttonText, styles.infoButtonText]}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footer}>Simple random profile generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    maxWidth: 420,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  infoButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  infoButtonText: {
    color: '#374151',
  },
  footer: {
    marginTop: 18,
    color: '#9ca3af',
  },
});
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-large" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone" color={color} />,
        }}
      />
    </Tabs>
  );
}
