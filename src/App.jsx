import React from "react";

import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
export default function App() {
  const [input, setInput] = useState();
  const [todo, setTodo] = useState({ todos: [] });
  const createTodo = () => {
    setInput("");
    if (!input) {
    } else {
      setTodo({ todos: [...todo.todos, input] });
    }
  };
  const removeTodo = (index) => {
    //   const filtered = todo.filter((value, index, arr) => {
    //     return index !== e;
    //   });
    //   setTodo(filtered);
    // };

    todo.todos.splice(index, 1);
    setTodo({ todos: todo.todos });
  };

  console.log(todo);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: "40px",
              padding: "10px",
              fontWeight: "500",
              textAlign: "center",
              color: "white"
            }}
          >
            Todo App
          </Text>
        </View>

        <View style={styles.body}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <TextInput
              onChangeText={(e) => setInput(e)}
              value={input}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "15px",
                fontSize: "20px",
                marginBottom: "10px"
              }}
              placeholder="Enter some task "
            />
            <View style={{ justifyContent: "center" }}>
              <TouchableOpacity
                onPress={createTodo}
                style={{
                  backgroundColor: "#4169e1",
                  width: "max-content",
                  padding: "15px",
                  borderRadius: "15px",
                  marginLeft: "10px",
                  justifyContent: "center",
                  height: "max-content"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "500"
                  }}
                >
                  Add Todo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <ol
              style={{
                fontSize: "30px",
                color: "#4169e1",
                fontWeight: "500"
              }}
            >
              {todo.todos.map((element, index) => {
                return (
                  <li>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "5px",
                        padding: "5px",
                        borderBottom: "2px solid #4169e1"
                      }}
                    >
                      <View
                        style={{
                          width: "200px"
                        }}
                      >
                        <Text style={{ fontSize: "25px" }}>{element}</Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          backgroundColor: "red",
                          padding: "5px",
                          borderRadius: "10px"
                        }}
                      >
                        <TouchableOpacity onPress={() => removeTodo(index)}>
                          <Text style={{ fontSize: "25px", color: "white" }}>
                            Delete
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </li>
                );
              })}
            </ol>
          </View>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "10px"
              }}
            >
              <Text
                style={{
                  color: "white"
                }}
              >
                Click me
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{
        backgroundColor:"#D3D3D3",
        padding:"20px",
        width:"80%",
        marginRight:"auto",
        marginLeft:"auto",
        marginTop:"20px"
      }}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: "30px"
            }}
          >
            EDIT TODO
          </Text>
          <TextInput placeholder="Enter some text" style={{ 
          padding: "10px",
          width:"80%",
          border:"2px solid blue",
          borderRadius:"10px"
           }} />
        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: "40px"
  },
  header: {
    backgroundColor: "#4169e1",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  },
  container: {
    flex: 1,
    alignItems: "center"
  }
});
