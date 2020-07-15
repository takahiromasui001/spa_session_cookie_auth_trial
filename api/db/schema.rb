# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_24_123006) do

  create_table "candidate_products", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "specification_item_id", null: false
    t.bigint "product_id", null: false
    t.index ["product_id"], name: "index_candidate_products_on_product_id"
    t.index ["specification_item_id"], name: "index_candidate_products_on_specification_item_id"
  end

  create_table "colors", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "product_id"
    t.index ["product_id"], name: "index_colors_on_product_id"
  end

  create_table "employees", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "maker"
    t.string "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "specification_items", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.integer "specification_type"
    t.bigint "specification_id"
    t.bigint "product_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "color_id"
    t.boolean "customize", default: false, null: false
    t.index ["color_id"], name: "index_specification_items_on_color_id"
    t.index ["product_id"], name: "index_specification_items_on_product_id"
    t.index ["specification_id"], name: "index_specification_items_on_specification_id"
  end

  create_table "specifications", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "status"
    t.integer "amount"
    t.integer "construction_method"
    t.bigint "employee_id"
    t.index ["employee_id"], name: "index_specifications_on_employee_id"
  end

  add_foreign_key "candidate_products", "products"
  add_foreign_key "candidate_products", "specification_items"
  add_foreign_key "colors", "products"
  add_foreign_key "specification_items", "colors"
  add_foreign_key "specification_items", "products"
  add_foreign_key "specification_items", "specifications"
  add_foreign_key "specifications", "employees"
end
