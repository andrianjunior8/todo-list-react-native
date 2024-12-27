import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import DoneCard from "@/components/DoneCard";
import CreateNewTodoCard from "@/components/CreateNewTodoCard";
import UnDoneCard from "@/components/UnDoneCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

const Index = () => {
  const [undoneTasks, setUndoneTasks] = useState([{ name: "Sikat gigi" }]);
  const [doneTasks, setDoneTasks] = useState([
    { name: "Mencuci Motor" },
    { name: "Membeli Makan" },
    { name: "Mandi" },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [task, setTask] = useState("");

  function handleModal() {
    setTask("");
    setOpenModal(!openModal);
  }

  const handleEdit = (index: Int32, task: string) => {
    undoneTasks[index].name = task;
  };

  const handleDelete = (index: Int32) => {
    var temp = [...undoneTasks];
    temp.splice(index, 1);

    setUndoneTasks(temp);
  };

  const addTasks = (task: string) => {
    const jsonAdd = {
      name: task,
    };

    undoneTasks.push(jsonAdd);

    setUndoneTasks(undoneTasks);

    setTask("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.title}>To Do Apps</Text>
          </View>
          <View style={styles.cardContainer}>
            <Pressable onPress={() => handleModal()}>
              <CreateNewTodoCard />
            </Pressable>
          </View>
          <View>
            <Text style={styles.subTitle}>Not Done Yet</Text>
          </View>
          {undoneTasks.length == 0 ? (
            <Text style={styles.noTasks}>No Task</Text>
          ) : (
            <></>
          )}
          {undoneTasks.map((item, index) => (
            <View style={styles.undoneList}>
              <View key={index} style={styles.cardNotDoneContainer}>
                <UnDoneCard name={item.name} />
              </View>
              <View style={styles.editButton}>
                <Pressable>
                  <Text style={styles.editButtonText}>EDIT</Text>
                </Pressable>
              </View>
              <View style={styles.deleteButton}>
                <Pressable onPress={() => handleDelete(index)}>
                  <Text style={styles.deleteButtonText}>DELETE</Text>
                </Pressable>
              </View>
            </View>
          ))}
          <View>
            <Text style={styles.subTitle}>Done</Text>
          </View>
          {doneTasks.map((item, index) => (
            <View key={index} style={styles.cardContainer}>
              <DoneCard name={item.name} />
            </View>
          ))}
        </ScrollView>

        {/* Modal */}
        {openModal && (
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.textInput}
                placeholder="Add Task"
                onChangeText={(text) => setTask(text)}
                value={task}
              />

              <View style={styles.buttonContent}>
                <View>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => {
                      addTasks(task);
                    }}
                  >
                    <Text style={styles.addButtonText}>Add</Text>
                  </Pressable>
                </View>

                <View>
                  <Pressable
                    style={styles.closeButton}
                    onPress={() => {
                      handleModal();
                    }}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8EACCD",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  title: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#FEF9D9",
  },
  subTitle: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#FEF9D9",
  },
  noTasks: {
    padding: 10,
    
  },
  undoneList: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  editButton: {
    width: 70,
    minHeight: 40,
    borderRadius: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  deleteButton: {
    width: 70,
    minHeight: 40,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  cardContainer: {
    padding: 10,
  },
  cardNotDoneContainer: {
    padding: 10,
    width: "60%",
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds transparency
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonContent: {
    width: 100,
    gap: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    width: 100,
    textAlign: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    width: 100,
    textAlign: "center",
  },
  editButtonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  deleteButtonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Index;
