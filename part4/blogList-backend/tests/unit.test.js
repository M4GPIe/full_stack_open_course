const listHelper = require('../utils/list_helper')

describe('dummy test collection', ()=>{
    test('dummy returns one', () => {
        const blogs = []
      
        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
      })
})

describe('totalLikes test collection', ()=>{

    test('totalLikes empty blog list',()=>{
        expect(listHelper.totalLikes([])).toBe(0)
    })

    test('totalLikes single blog list',()=>{

        const blogs = [{
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
        }]

        expect(listHelper.totalLikes(blogs)).toBe(7)
    })

    test('totalLikes multiple blog list', ()=>{
        const blogs = [
            {
              _id: "5a422a851b54a676234d17f7",
              title: "React patterns",
              author: "Michael Chan",
              url: "https://reactpatterns.com/",
              likes: 7,
              __v: 0
            },
            {
              _id: "5a422aa71b54a676234d17f8",
              title: "Go To Statement Considered Harmful",
              author: "Edsger W. Dijkstra",
              url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
              likes: 5,
              __v: 0
            },
            {
              _id: "5a422b3a1b54a676234d17f9",
              title: "Canonical string reduction",
              author: "Edsger W. Dijkstra",
              url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
              likes: 12,
              __v: 0
            },
            {
              _id: "5a422b891b54a676234d17fa",
              title: "First class tests",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
              likes: 10,
              __v: 0
            },
            {
              _id: "5a422ba71b54a676234d17fb",
              title: "TDD harms architecture",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
              likes: 0,
              __v: 0
            },
            {
              _id: "5a422bc61b54a676234d17fc",
              title: "Type wars",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
              likes: 2,
              __v: 0
            }  
        ]

        expect(listHelper.totalLikes(blogs)).toBe(36)
    })

})

describe('favoriteBlog test collection',()=>{

    test('favoriteBlog empty blog list',()=>{
        expect(listHelper.favoriteBlog([])).toBe(-1)
    })

    test('favoriteBlog single blog list',()=>{

        const blogs = [{
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
        }]

        expect(listHelper.favoriteBlog(blogs)).toEqual({
            title: "React patterns",
            author: "Michael Chan",
            likes: 7
        })
    })

    test('favoriteBlog multiple blog list', ()=>{
        const blogs = [
            {
              _id: "5a422a851b54a676234d17f7",
              title: "React patterns",
              author: "Michael Chan",
              url: "https://reactpatterns.com/",
              likes: 7,
              __v: 0
            },
            {
              _id: "5a422aa71b54a676234d17f8",
              title: "Go To Statement Considered Harmful",
              author: "Edsger W. Dijkstra",
              url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
              likes: 5,
              __v: 0
            },
            {
              _id: "5a422b3a1b54a676234d17f9",
              title: "Canonical string reduction",
              author: "Edsger W. Dijkstra",
              url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
              likes: 12,
              __v: 0
            },
            {
              _id: "5a422b891b54a676234d17fa",
              title: "First class tests",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
              likes: 10,
              __v: 0
            },
            {
              _id: "5a422ba71b54a676234d17fb",
              title: "TDD harms architecture",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
              likes: 0,
              __v: 0
            },
            {
              _id: "5a422bc61b54a676234d17fc",
              title: "Type wars",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
              likes: 2,
              __v: 0
            }  
        ]

        expect(listHelper.favoriteBlog(blogs)).toEqual({
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        })
    })

})

describe('mostBlogs test collection',()=>{

    test('mostBlogs empty blog list',()=>{
      expect(listHelper.mostBlogs([])).toEqual({
        author: '',
        blogs: 0
      })
    })

    test('mostBlogs single blog list',()=>{

        const blogs = [{
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
        }]

        expect(listHelper.mostBlogs(blogs)).toEqual({
            author: "Michael Chan",
            blogs: 1
        })
    })

    test('mostBlogs multiple blog list', ()=>{
        const blogs = [
            {
              _id: "5a422a851b54a676234d17f7",
              title: "React patterns",
              author: "Michael Chan",
              url: "https://reactpatterns.com/",
              likes: 7,
              __v: 0
            },
            {
              _id: "5a422aa71b54a676234d17f8",
              title: "Go To Statement Considered Harmful",
              author: "Edsger W. Dijkstra",
              url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
              likes: 5,
              __v: 0
            },
            {
              _id: "5a422b3a1b54a676234d17f9",
              title: "Canonical string reduction",
              author: "Edsger W. Dijkstra",
              url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
              likes: 12,
              __v: 0
            },
            {
              _id: "5a422b891b54a676234d17fa",
              title: "First class tests",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
              likes: 10,
              __v: 0
            },
            {
              _id: "5a422ba71b54a676234d17fb",
              title: "TDD harms architecture",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
              likes: 0,
              __v: 0
            },
            {
              _id: "5a422bc61b54a676234d17fc",
              title: "Type wars",
              author: "Robert C. Martin",
              url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
              likes: 2,
              __v: 0
            }  
        ]

        expect(listHelper.mostBlogs(blogs)).toEqual({
            author: "Robert C. Martin",
            blogs : 3
        })
    })

})

describe('mostLikes test collection',()=>{

  test('mostLikes empty blog list',()=>{
    expect(listHelper.mostLikes([])).toEqual({
      author: '',
      likes: 0
    })
  })

  test('mostLikes single blog list',()=>{

      const blogs = [{
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
      }]

      expect(listHelper.mostLikes(blogs)).toEqual({
          author: "Michael Chan",
          likes: 7
      })
  })

  test('mostLikes multiple blog list', ()=>{
      const blogs = [
          {
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
          },
          {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0
          },
          {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
          },
          {
            _id: "5a422b891b54a676234d17fa",
            title: "First class tests",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
            likes: 10,
            __v: 0
          },
          {
            _id: "5a422ba71b54a676234d17fb",
            title: "TDD harms architecture",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
            likes: 0,
            __v: 0
          },
          {
            _id: "5a422bc61b54a676234d17fc",
            title: "Type wars",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
            likes: 2,
            __v: 0
          }  
      ]

      expect(listHelper.mostLikes(blogs)).toEqual({
          author: "Edsger W. Dijkstra",
          likes : 17
      })
  })

})