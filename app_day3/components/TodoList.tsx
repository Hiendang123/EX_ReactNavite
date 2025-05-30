import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Todo {
  id: string;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddTodo = () => {
    if (inputText.trim() === "") {
      Alert.alert("Arr!", "Ye need to enter some text, matey!");
      return;
    }

    if (editingId) {
      // Update existing todo
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: inputText } : todo
        )
      );
      setEditingId(null);
    } else {
      // Add new todo
      setTodos([...todos, { id: Date.now().toString(), text: inputText }]);
    }
    setInputText("");
  };

  const handleEdit = (id: string, text: string) => {
    setEditingId(id);
    setInputText(text);
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <View className="flex-row items-center justify-between bg-white p-4 mb-2 rounded-lg shadow">
      <Text className="flex-1 text-lg">{item.text}</Text>
      <View className="flex-row">
        <TouchableOpacity
          onPress={() => handleEdit(item.id, item.text)}
          className="bg-blue-500 px-4 py-2 rounded mr-2"
        >
          <Text className="text-white">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          className="bg-red-500 px-4 py-2 rounded"
        >
          <Text className="text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 p-4 bg-gray-100 mt-7">
      <Text className="text-2xl font-bold mb-4">Todo List</Text>
      <View className="flex-row mb-4">
        <TextInput
          className="flex-1 bg-white p-4 rounded-l-lg border border-gray-300"
          value={inputText}
          onChangeText={setInputText}
          placeholder="Enter your task, matey!"
        />
        <TouchableOpacity
          onPress={handleAddTodo}
          className="bg-green-500 px-6 py-4 rounded-r-lg"
        >
          <Text className="text-white font-bold">
            {editingId ? "Update" : "Add"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        className="flex-1"
      />
    </View>
  );
}
