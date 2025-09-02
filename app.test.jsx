import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it } from "vitest"
import App from "./src/App"
import "@testing-library/jest-dom/vitest"

describe("test app", () => {
	it(" should show 4", () => {
		render(<App />)
		expect(screen.getByText(4)).toBeInTheDocument()
	})
})
