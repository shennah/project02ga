json.array!(@matches) do |match|
  json.extract! match, :id, :name, :pictures, :age, :bio, :income, :location, :user_id
  json.url match_url(match, format: :json)
end
