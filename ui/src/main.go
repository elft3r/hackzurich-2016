package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	// do we have a custom port?
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.Handle("/", http.FileServer(http.Dir("/go/client")))
	log.Printf("Server started: http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
